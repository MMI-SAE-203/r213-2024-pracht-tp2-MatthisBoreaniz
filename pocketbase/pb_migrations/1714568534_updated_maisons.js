/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qzzwey9w66sl8mu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ezpo8j0a",
    "name": "nbSdb",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qzzwey9w66sl8mu")

  // remove
  collection.schema.removeField("ezpo8j0a")

  return dao.saveCollection(collection)
})
