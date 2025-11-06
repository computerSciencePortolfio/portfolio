text = input("Enter Text to encrypt")
shift = 3
alphabet = 'abcdefghijklmnopqrstuvwxyz'
encrypted_text = ''

for char in text.lower():
    if char == ' ' or char == '.' or char == ',' or char == "'" or char == "!" or char == "?":
        encrypted_text += char
    else:
        index = alphabet.find(char)
        new_index = (index + shift) % 26
        encrypted_text += alphabet[new_index]
print('encrypted text:', encrypted_text)