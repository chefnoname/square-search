  // Concatenate the values of the item attributes
  const getItemString = (
    item,
    attributes,
  ) => attributes.reduce(
      (str, a) => {
        const value= item[a];
  
        if (value == null || typeof value.toString !== 'function') {
          return str;
        }
  
        return `${str} ${value.toString().toLowerCase()}`;
      },
      '',
    );
  
  // Makes sure the itemString contains every word in the searchValue
  const itemStringMatches = (itemString, searchValue) => (
    searchValue.toLowerCase().split(' ').every(
      (word) => itemString.includes(word),
    )
  );
  

  const getFilteredItems = (searchValue, items, attributes) => {
  
    const itemStrings = items.map((i) => getItemString(i, attributes));
  
        if (searchValue === '') {
            return items;
        }
      
        return items.filter((item, index) => (
            itemStringMatches(itemStrings[index], searchValue)
        ));
    
  };
  
  export default getFilteredItems;