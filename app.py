from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/download")
def download_resume():
    return send_from_directory(
        directory=os.path.join(app.root_path, "static"),
        path="Aditya_Sadewale_Resume.pdf",
        as_attachment=True
    )

if __name__ == "__main__":
    app.run(debug=True)