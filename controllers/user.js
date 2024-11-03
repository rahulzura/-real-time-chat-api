import { getUsers } from '../services/user.js';
import { sendErrorResponse, sendSuccessResponse } from '../utils/response.js';

export const getUsersController = async (req, res) => {
  try {
    const users = await getUsers();
    await sendSuccessResponse({ users }, res);
  } catch (err) {
    await sendErrorResponse(err, res);
  }
};