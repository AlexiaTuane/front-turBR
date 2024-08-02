##	Instala OpenSSL

* sudo apt-get install openssl

##	Gerar uma Chave Privada
* openssl genpkey -algorithm RSA -out key.pem -aes256

##	Gerar um Certificado Autoassinado

* openssl req -new -x509 -key key.pem -out CertificadoDigital.pem -days 365

##	Converte para formato PKCS12 (PFX)

* openssl pkcs12 -export -in CertificadoDigital.pem -inkey key.pem -out certificate.p12 -name "CertificadoAlexia"

##	Verifica o conteúdo do PKCS12

* openssl pkcs12 -info -in certificate.p12

## 