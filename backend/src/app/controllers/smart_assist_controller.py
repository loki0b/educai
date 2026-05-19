import os
import json
from flask import request, jsonify
from google import genai
from google.genai import types

client = genai.Client(api_key=os.environ.get("GOOGLE_API_KEY"))


class SmartAssist:
    def generate_recommendations(self):
        data = request.json

        instructions = """
        Atue como um assistente pedagógico.
        O usuário enviará o titulo a disciplina e ementa em formato de json.
        Retorne com base no que foi enviado.

        As respostas serão utilizadas em campos para o frontend.
        Utilize linguagem neutra e direta no formato apropriado para os campos.

        Para contents resuma brevemente.
        Para resources apenas indique materiais como, livros, sites, etc. No máximo 4.
        Para tags, retorne apenas três.
        Retorne estritamente um JSON com as seguintes chaves:
        {
            "contents": "texto com as sugestões de conteúdo",
            "resources": [
                "material1",
                "material2",
                "material3",
                "material4",
            ],
            "tags": [
                "tag1",
                "tag2",
                "tag3"
            ]
        }
        """

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=f"{data}",
            config=types.GenerateContentConfig(
                response_mime_type="application/json", system_instruction=instructions
            ),
        )

        res = json.loads(response.text)
        return jsonify(res)
