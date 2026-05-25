from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)


@app.errorhandler(404)
def not_found(e):
    return render_template('error.html', code=404, message='Page not found'), 404


@app.errorhandler(500)
def server_error(e):
    return render_template('error.html', code=500, message='Something went wrong'), 500


@app.route('/')
def home():
    return render_template('index.html', active_page='home')


@app.route('/about')
def about():
    return render_template('about.html', active_page='about')


@app.route('/services')
def services():
    return render_template('services.html', active_page='services')


@app.route('/portfolio')
def portfolio():
    return render_template('portfolio.html', active_page='portfolio')


@app.route('/contact')
def contact():
    return render_template('contact.html', active_page='contact')


@app.route('/send_message', methods=['POST'])
def send_message():
    name = request.form.get('name')
    email = request.form.get('email')
    phone = request.form.get('phone')
    service = request.form.get('service')
    message = request.form.get('message')
    return redirect(url_for('home', _anchor='contact'))


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
