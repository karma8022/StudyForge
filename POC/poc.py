import fitz  # PyMuPDF
import json

def extract_text_from_pdf(pdf_path):
    doc = fitz.open(pdf_path)
    full_text = ""

    for page_num in range(len(doc)):
        page = doc.load_page(page_num)
        page_text = page.get_text("text")  # Extract text from each page
        full_text += page_text.replace('\n', ' ')  # Remove newlines and concatenate text
        
    return full_text

def save_to_json(data, output_path):
    # Structure the data as a dictionary with key "text"
    output_data = {"text": data}
    
    with open(output_path, 'w', encoding='utf-8') as json_file:
        json.dump(output_data, json_file, ensure_ascii=False, indent=4)

if __name__ == "__main__":
    pdf_path = "./PDF/attention.pdf"  # Path to your PDF
    json_output_path = "./PDF/output.json"  # Path to save the JSON output
    
    # Extract text from PDF
    text = extract_text_from_pdf(pdf_path)
    
    # Save to JSON file
    save_to_json(text, json_output_path)
    
    print(f"Text saved to {json_output_path}")
