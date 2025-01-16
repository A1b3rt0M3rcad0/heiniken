from flask import Flask, request, redirect, url_for
from flask import render_template

app = Flask(__name__)

@app.route('/')
def home():
    return redirect(url_for('validador_de_boleto'))

@app.route('/validador-de-boleto')
def validador_de_boleto():
    return render_template('pages/home.html')

@app.route('/resultado')
def resultado():
    return render_template('pages/resultado.html')

@app.route('/validar-boleto', methods=['POST'])
def validar_boleto():
    if request.method == 'POST':
        data = request.form['numero_boleto']
        data = data.replace(' ', '').replace('.', '')
        print(data)
    return redirect(url_for('resultado'))

if __name__ == '__main__':
    app.run(debug=True)