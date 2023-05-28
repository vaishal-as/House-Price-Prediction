from fastapi import FastAPI,Request,Form
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from app import house

templates = Jinja2Templates(directory="templates")
app=FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
@app.get("/")
def front(request:Request):
    return templates.TemplateResponse("index.html", {"request": request})
@app.post("/output")
def elements(request:Request,inputField1:float=Form(...),inputField2:float=Form(...),inputField3:float=Form(...),inputField4:float=Form(...),inputField5:float=Form(...),inputField6:float=Form(...),inputField7:float=Form(...),inputField8:float=Form(...),inputField9:float=Form(...),inputField10:float=Form(...),inputField11:float=Form(...),inputField12:float=Form(...),inputField13:float=Form(...)):
    result=house(inputField1,inputField2,inputField3,inputField4,inputField5,inputField6,inputField7,inputField8,inputField9,inputField10,inputField11,inputField12,inputField13)
    return templates.TemplateResponse("index.html", {"request": request,'result':result+"k"})

