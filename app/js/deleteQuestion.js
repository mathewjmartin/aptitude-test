/**
 * deletes question from Test
 * @param {number} id the question id
 * @returns {Promise<*>} response from api
 */
async function deleteQuestion(id) {
    return await sendData(undefined, `/question/${id}/delete`);
}
