text = input("Enter Text to decode")
shift = 3
alphabet = 'abcdefghijklmnopqrstuvwxyz'
decoded_text = ''

for char in text.lower():
    if char == ' ' or char == '.' or char == ',' or char == "'" or char == "!" or char == "?":
        decoded_text += char
    else:
        index = alphabet.find(char)
        new_index = (index - shift) % 26
        decoded_text += alphabet[new_index]
print('Decoded Text:', decoded_text)