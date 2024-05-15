import torch
from transformers import AutoModelForCausalLM, AutoTokenizer

torch.set_default_device("cuda")


def main():
    # Model loading (replace with your Hugging Face model ID)
    model_name = "JosephusCheung/LL7M"
    try:
        tokenizer = AutoTokenizer.from_pretrained(model_name)
        model = AutoModelForCausalLM.from_pretrained(model_name, torch_dtype="auto")
        print(f"Model '{model_name}' loaded successfully!")
    except Exception as e:
        print(f"Error loading model: {e}")
        return

    # Text input loop
    while True:
        user_input = input("Enter text to generate text from (or 'quit' to exit): ")

        if user_input.lower() == "quit":
            break

        # Preprocess input
        try:
            encoded_input = preprocess_input(user_input, tokenizer)
        except Exception as e:
            print(f"Error preprocessing input: {e}")
            continue

        # Generate text
        try:
            generated_output = generate_text(model, encoded_input)
            decoded_text = decode_output(generated_output, tokenizer)
            print(f"Generated Text: {decoded_text}")
        except Exception as e:
            print(f"Error generating text: {e}")

# Preprocess function (adapt based on your model's requirements)
def preprocess_input(text, tokenizer):
    encoded_input = tokenizer(text, return_tensors="pt")  # Convert to PyTorch tensors
    return encoded_input

# Generate text function
def generate_text(model, encoded_input):
    generated_output = model.generate(**encoded_input)
    return generated_output

# Decode output function
def decode_output(generated_output, tokenizer):
    decoded_text = tokenizer.batch_decode(generated_output, skip_special_tokens=True)[0]
    decoded_text = decoded_text.replace('\x1a', '')  # Example removal of CTRL+Z
    return decoded_text

if __name__ == "__main__":
    main()
