const CollectionItem = require('../models/collectionItem');

async function getAllItems() {
  try {
    return await CollectionItem.find();
  } catch (error) {
    throw new Error(`Could not fetch collection items: ${error.message}`);
  }
}

async function getItemById(id) {
  try {
    return await CollectionItem.findById(id);
  } catch (error) {
    throw new Error(`Could not fetch collection item: ${error.message}`);
  }
}

async function createItem(itemData) {
  try {
    const newItem = new CollectionItem(itemData);
    return await newItem.save();
  } catch (error) {
    throw new Error(`Could not create collection item: ${error.message}`);
  }
}

async function updateItem(id, newData) {
  try {
    const item = await CollectionItem.findById(id);
    if (!item) {
      throw new Error('Collection item not found');
    }
    Object.assign(item, newData);
    return await item.save();
  } catch (error) {
    throw new Error(`Could not update collection item: ${error.message}`);
  }
}

async function deleteItem(id) {
  try {
    const item = await CollectionItem.findById(id);
    if (!item) {
      throw new Error('Collection item not found');
    }
    await item.remove();
  } catch (error) {
    throw new Error(`Could not delete collection item: ${error.message}`);
  }
}

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem
};
