import json
from datetime import datetime
from random import randrange


def generadorPunto(cantidadSistemas):
    estados = ["NORMAL", "NORMAL","NORMAL","NORMAL","CRITICO", "MANTENIMIENTO"]
    punto = {
        "id": randrange(10),
        "lon": randrange(100),
        "lat": randrange(100),
        "state": estados[randrange(len(estados))],
        "timeStamp": str(datetime.now()),
    }
    return punto

if __name__ == "__main__":
  numeroPuntos = 5
  cantidadSistemas = 5;
  puntos = []

  for i in range(numeroPuntos):
    puntos.append(generadorPunto(cantidadSistemas))

  print(json.dumps(puntos, indent=4))

  jsonObject = json.dumps(puntos, indent=4)

with open("db.json", "w") as outfile:
    outfile.write("{ \"puntos\": " + jsonObject + "}")
