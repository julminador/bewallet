import boom from "@hapi/boom";
import AssetService from "../../services/accounts/assets.js";

const service = new AssetService();

/**
 * List the asset account
 */
export async function getAssets(req, res, next) {
  try {
    const assets = await service.find();
    res.status(200).json({ assets })
  } catch (error) {
    next(error);
  }
}

/**
 * Create a new asset account
 */
export async function createAsset(req, res, next) {
  try {
    const { body } = req;
    const data = {
      ...body,
      asset:1,
      income: 0,
      expense: 0,
    }
    const newAsset = await service.create(data);
    res.status(201).json({ newAsset })
  } catch (error) {
    next(error);
  }
}

/**
 * Update an asset account
 */
export async function updateAsset(req, res, next) {
  try {
    const { accountId } = req.params;
    const { body } = req;
    const data = {
      accountId,
      ...body,
    }
    const updatedAsset = await service.update(data);
    if (!updatedAsset) throw boom.notFound('Product not found');
    res.status(200).json({ updatedAsset })
  } catch (error) {
    next(error);
  }
}

/**
 * Delete an asset account
 */
export async function deleteAsset(req, res, next) {
  try {
    const { accountId } = req.params;
    const deletedAsset = await service.delete(accountId);
    if (!deletedAsset) throw boom.notFound('Product not found');
    res.status(200).json({ deletedAsset })
  } catch (error) {
    next(error);
  }
}

export default { getAssets, createAsset, updateAsset, deleteAsset };