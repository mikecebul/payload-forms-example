export function jsonToHtmlTable(obj: Record<string, any>): string {
  let htmlTable = '<table border="1" cellpadding="5" cellspacing="0">';

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && value !== null) {
      if (Array.isArray(value)) {
        // Handle arrays by creating a sub-table
        htmlTable += `<tr><td>${key}</td><td><table border="1" cellpadding="5" cellspacing="0">`;
        for (const item of value) {
          htmlTable += '<tr><td>' + 
            (typeof item === 'object' ? jsonToHtmlTable(item) : item) + 
            '</td></tr>';
        }
        htmlTable += '</table></td></tr>';
      } else {
        // Handle nested objects as a sub-table
        htmlTable += `<tr><td>${key}</td><td>${jsonToHtmlTable(value)}</td></tr>`;
      }
    } else {
      htmlTable += `<tr><td>${key}</td><td>${value}</td></tr>`;
    }
  }

  htmlTable += '</table>';
  return htmlTable;
}
