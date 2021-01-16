# Flask
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

# Gensim
from gensim.summarization.summarizer import summarize
from gensim.summarization import keywords

# nltk
import nltk
#nltk.download('punkt')

import random

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/post', methods=['POST'])
@cross_origin()
def index():
    data = request.get_json(force=True)
    #value = data['key']
    #return jsonify({"key":value}), {'Content-Type': 'application/json'}

    ####################################
    # {
    # "text": "Here is the text from the pdf",
    # "ratio": "0.5"
    # }
    text = data['text']
    ratio_user = float(data['ratio'])
    ####################################

    # remember to name the key text
    summary = summarize(text, ratio=ratio_user)
    summary_list = nltk.tokenize.sent_tokenize(summary)

    all_keywords = keywords(text, words=(len(summary_list)*4))
    all_keywords = all_keywords.split()

    # print(unused)

    random.shuffle(all_keywords)
    # print(unused)


    return_list = []
    for note in summary_list:
        # find keywords from the sentence
        my_keywords = keywords(note, words=2)
        my_keywords = my_keywords.split()

        my_keyword = my_keywords.pop(0)

        # split note
        my_note = note.split()

        # if word in sentence == keyword then replace with ___________
        new_note = []
        for notes in my_note:
            if notes == my_keyword:
                new_note.append('______')
            else:
                new_note.append(notes)

        return_list.append({"note": " ".join(new_note), "answer": my_keyword,
                            "alt1": all_keywords.pop(0), "alt2": all_keywords.pop(0), "alt3": all_keywords.pop(0)
                            })
        # send sentence as question in a dictionary

        # send answer as keyword

        # send alt1, alt2, alt3 as other keywords from the sum_data
    return jsonify({"response":return_list}), {'Content-Type': 'application/json'}

if __name__ == "__main__":
    app.run(debug=True)
