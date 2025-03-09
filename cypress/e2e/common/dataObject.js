/// <reference types="cypress" />

class DataObjects {
    abnSearchField = 'input[id="SearchText"]';
    entityName = 'span[itemprop="legalName"]';
    entityType = 'a[href="/Help/EntityTypeDescription?Id=00019"]';
    mainBusinessLocation = 'span[itemprop="addressLocality"]';
    searchMenu = 'a[href="/Search/Index"]';
    toolsAndResources = 'a[href="/Tools"]';
    help = 'a[href="/Help"]';
}

export default new DataObjects();