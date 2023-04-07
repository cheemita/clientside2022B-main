const db = require('./db');
const helper = require('../helper');
const config = require('../config');



async function getComment(page = 1){
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT id, comment, user, idpost
        FROM comments LIMIT ${offset}, ${config.listPerPage}
        `
    );
    const data = helper.emptyOrRows(rows);
    const meta = (page);

    return {
        data,
        meta
    }
}

module.exports = {
    getComment
};