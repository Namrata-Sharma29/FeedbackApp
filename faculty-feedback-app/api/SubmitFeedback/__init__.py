import logging
import azure.functions as func
import json

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info("Feedback function triggered.")

    try:
        data = req.get_json()
        return func.HttpResponse(
            json.dumps({"status": "success", "received": data}),
            mimetype="application/json"
        )
    except:
        return func.HttpResponse(
            json.dumps({"status": "error"}),
            status_code=400
        )
