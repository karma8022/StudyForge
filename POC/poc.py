import fitz  # PyMuPDF
import pytesseract
from PIL import Image
import io
import json
import google.generativeai as genai

# Set path to tesseract executable (if not set globally)
pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"  # Update the path if necessary

def extract_text_from_pdf(pdf_path):
    doc = fitz.open(pdf_path)
    full_text = ""

    for page_num in range(len(doc)):
        page = doc.load_page(page_num)
        # Extract images from the page
        img_list = page.get_images(full=True)
        
        # If images are found on the page
        if img_list:
            for img_index, img in enumerate(img_list):
                xref = img[0]
                base_image = doc.extract_image(xref)
                image_bytes = base_image["image"]
                image = Image.open(io.BytesIO(image_bytes))

                # Use pytesseract to extract text from the image
                text_from_image = pytesseract.image_to_string(image)
                full_text += text_from_image

    return full_text

def clean_text(text):
    # Replace newline characters with spaces and handle special characters
    cleaned_text = text.replace("\n", " ").replace("�", "'")
    # Remove excessive whitespace
    cleaned_text = " ".join(cleaned_text.split())
    return cleaned_text

# Example usage
pdf_path = "./PDF/Mamba.pdf"
text = extract_text_from_pdf(pdf_path)
cleaned_text = clean_text(text)

# Save cleaned text to JSON file
with open('output.json', 'w', encoding='utf-8') as json_file:
    json.dump({"text": cleaned_text}, json_file, ensure_ascii=False, indent=4)



# now i want to use this json file and then use google gemini to generate questions from 
api_key = ""

def generate_questions_and_answers(text):
    prompt = f"""
    You are a teaching assistant. Based on the following text, generate 5 questions along with their detailed answers to help someone understand the content better.

    Text: "{text}"

    Generate the questions and answers: just give me the answer and the question in json format nothing else. give me the json only.
    """

    genai.configure(api_key=api_key)
    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content(prompt)
    return response

text = ""
# read the json file
with open('output.json', 'r', encoding='utf-8') as json_file:
    data = json.load(json_file)
    text = data['text']

print(text)

qna = generate_questions_and_answers(text)

print(qna.text)