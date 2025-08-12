/**
 * Returns back some attributes based on whether the
 * link is active or a parent of an active item
 *
 * @param {String} itemUrl The link in question
 * @param {String} pageUrl The page context
 * @returns {String} The attributes or empty
 * see /src/_data/navigation.json
 */
export default {
    getLinkActiveState: function getLinkActiveState(itemUrl, pageUrl) {
        let response = 'class="nav-link"';

        if (itemUrl === pageUrl) {
            response = 'class="nav-link active" data-state="active" aria-current="page" test="test"';
        }

        return response;
    }
}