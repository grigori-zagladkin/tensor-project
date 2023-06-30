import uvicorn

if __name__ == '__main__':
    #192.168.0.105 port = 1500
    uvicorn.run('app.api:app', host='127.0.0.1', port=8000, reload=True)
#http://dpg-cif89b18g3n3ipqgrd10-a.oregon-postgres.render.com
