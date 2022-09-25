# Importing Modules
from mpl_toolkits import mplot3d
import json
import numpy as np
import random
import uuid
import datetime
#pip3 import numpy
from shapely.geometry import Polygon, Point 
#matplotlib inline
import numpy as np
import matplotlib.pyplot as plt
fig = plt.figure()
ax = plt.axes(projection='3d')

id = str(uuid.uuid4().fields[-1])[:5]

# Data for three-dimensional scattered points
"""zdata = 15 * np.random.random(100)
xdata = np.sin(zdata) + 0.1 * np.random.randn(100)
ydata = np.cos(zdata) + 0.1 * np.random.randn(100)
ax.scatter3D(xdata, ydata, zdata, c=zdata, cmap='Greens');"""

def crearPunto(point, estado):
  x, y, z = point
  id = str(uuid.uuid4().fields[-1])[:5]
  punto={
    "id": id,
    "x" : x,
    "y": y,
    "z": z,
    "timeStamp": datetime.datetime.now(),
    "state": estado
    }
  puntos.append(punto)

def defineCircunference(center, radio, largo, rotura):
  estado = ["NORMAL", "NORMAL", "MANTENIMIENTO"]
  #estado= "Normal"
  for i in range(largo):
    x, y, z= center
    if  i == rotura:
      point1=(x + radio + 10, y, z)
      crearPunto(point1, "CRITICO")
      ax.scatter3D(x + radio  + 10, y, z)
    else:
      point1=(x + radio, y, z)
      crearPunto(point1, random.choice(estado))
      ax.scatter3D(x + radio, y, z)
    point2=(x - radio, y, z)
    crearPunto(point2, random.choice(estado))
    ax.scatter3D(x - radio, y, z)
    point3=(x, y + radio, z)
    crearPunto(point3, random.choice(estado))
    ax.scatter3D(x, y + radio, z)
    point4=(x, y - radio, z)
    crearPunto(point4, random.choice(estado))
    ax.scatter3D(x, y - radio, z)
    point5=(x + radio/2, y + radio/2, z)
    crearPunto(point5, random.choice(estado))
    ax.scatter3D(x + radio/2, y + radio/2, z)
    point6=(x - radio/2, y - radio/2, z)
    crearPunto(point6, random.choice(estado))
    ax.scatter3D(x - radio/2, y - radio/2, z)
    point7=(x + radio/2, y- radio/2, z)
    crearPunto(point7, random.choice(estado))
    ax.scatter3D(x + radio/2, y- radio/2, z)
    point8=(x - radio/2, y + radio/2, z)
    crearPunto(point8, random.choice(estado))
    ax.scatter3D(x - radio/2, y+ radio/2, z)
    center = (x,y, z+10)
    #crearPunto(center)
    #ax.scatter3D(x,y, z+0.1)

    

def defineCenter(radio, largo):
  CenterX= random.uniform(0,100.0)
  CenterY= random.uniform(0,100.0)
  CenterZ= random.uniform(0,50.0)
  rotura = random.randint(0, largo)
  print("Rotura en punto z: ",rotura)
  center = (CenterX,CenterY, CenterZ)
  defineCircunference(center, radio, largo, rotura)
  #crearPunto(center)

puntos=[]
radio =5
largo = 10
defineCenter(radio, largo)
plt.show()


jsonObject = json.dumps(puntos, indent=4, default=str)

with open("dbPipe.json", "w") as outfile:
    outfile.write("{ \"puntos\": " + jsonObject + "}")
