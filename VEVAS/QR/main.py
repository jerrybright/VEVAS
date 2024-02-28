import qrcode
# Link for website
input_data = "https://etherscan.io/tx/0x70141fa68a3c4084247f052bb13a7cb9a91783701656440b8404f6360796c7d4"
#Creating an instance of qrcode
qr = qrcode.QRCode(
        version=1,
        box_size=10,
        border=5)
qr.add_data(input_data)
qr.make(fit=True)
img = qr.make_image(fill='black', back_color='white')
img.save('qrcode009.png')