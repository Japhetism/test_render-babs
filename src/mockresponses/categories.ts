export const categoriesResponse = () => {
    return {
        "statusCode": 201,
        "message": "Success",
        "hasError": false,
        "data": [
          {
            "name": "cate1",
            "description": "cat1 des, drinks",
            "_id": "2c0f8afc-b175-49b3-a4fc-d9c78765ecf2",
            "markupType": "Percentage",
            "markupValue": "300"
          },
          {
            "name": "cate2",
            "description": "cate2, drinks",
            "_id": "48b3e419-d76c-43e0-9c9c-0c0695d85caf",
            "markupType": "Value",
            "markupValue": "9000"
          }
        ]
    }
}