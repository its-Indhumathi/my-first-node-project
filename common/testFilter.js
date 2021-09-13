const ALLOWED_PLATFORMS = ['ios', 'android', 'web'];
const ALLOWED_RUN_TYPES = ['smoke', 'regression', 'visual'];

class TestFilter {
    anyPlatform(tags, testFn) {
        //this.platform = tags;
        this._validateTags(tags, ALLOWED_PLATFORMS);
        if(typeof testFn === 'function') {
            this.exec(testFn);
        }
        else {
            return this;
        }
    }
    anyRunType(tags, testFn) {
        //this.run = tags;
        this._validateTags(tags, ALLOWED_RUN_TYPES);
        if(typeof testFn === 'function') {
            this.exec(testFn);
        }
        else {
            return this;
        }
    }
    exec(testFn) {
        testFn();
    }
    _validateTags(tags, allowedTags) {
        let tagsNotPresent = tags.filter((tag) => !allowedTags.includes(tag));
        if(tagsNotPresent.length > 0) {
            throw new Error(`Tags: ${tagsNotPresent} are not allowed, supported tags are ${allowedTags}`);
        }
    }
}

export default new TestFilter();