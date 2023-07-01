import uvicorn

if __name__ == '__main__':
    #192.168.0.105 port = 1500
    uvicorn.run('app.api:app', host='192.168.105.60', port=1500, reload=True)
#http://dpg-cif89b18g3n3ipqgrd10-a.oregon-postgres.render.com
