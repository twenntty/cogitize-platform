const CollectionItem = require('../Models/collectionItem');

async function getAllCollectionItems(req, res) {
  try {
    const collectionItems = await CollectionItem.find();
    res.json(collectionItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getCollectionItemById(req, res) {
  res.json(res.collectionItem);
}

async function createCollectionItem(req, res) {
  const collectionItem = new CollectionItem(req.body);
  try {
    const newCollectionItem = await collectionItem.save();
    res.status(201).json(newCollectionItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateCollectionItem(req, res) {
  if (req.body.title != null) {
    res.collectionItem.title = req.body.title;
  }
  if (req.body.description != null) {
    res.collectionItem.description = req.body.description;
  }
  
  try {
    const updatedCollectionItem = await res.collectionItem.save();
    res.json(updatedCollectionItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteCollectionItem(req, res) {
  try {
    await res.collectionItem.remove();
    res.json({ message: 'Collection item deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getAllCollectionItems,
  getCollectionItemById,
  createCollectionItem,
  updateCollectionItem,
  deleteCollectionItem
};
