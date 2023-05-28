import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn import svm
from sklearn.svm import SVC
from sklearn.metrics import mean_absolute_percentage_error
from sklearn.metrics import confusion_matrix
import joblib
def house(inputFeild1,inputFeild2,inputFeild3,inputFeild4,inputFeild5,inputFeild6,inputFeild7,inputFeild8,inputFeild9,inputFeild10,inputFeild11,inputFeild12,inputFeild13):
    model=joblib.load("filename.pkl")
    result=model.predict([[inputFeild1,inputFeild2,inputFeild3,inputFeild4,inputFeild5,inputFeild6,inputFeild7,inputFeild8,inputFeild9,inputFeild10,inputFeild11,inputFeild12,inputFeild13]])
    result1=("%.4f" % result)
    return result1