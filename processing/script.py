from io import BytesIO
import requests
import pandas as pd

r = requests.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vQngt5TxTabbOavo5qHaZz5ohs9o_46sWrhQMKT5gJdedIG3Icq0qvuUX1dfdkcrmqNUxzCjOk2egSo/pub?gid=160193944&single=true&output=csv')
data = r.content

df = pd.read_csv(BytesIO(data), index_col=0, parse_dates=['Marca temporal'])

column_names = {"Mayor grado académico alcanzado": "education"}
df.rename(columns = column_names, inplace=True)

df_education = df["education"].value_counts().to_frame().reset_index()
df_education.rename(columns = {"index": "Education", "education": "Value"}, inplace=True)

print(df_education)

df_education.to_csv('./public/data/education.csv', index=False) 

