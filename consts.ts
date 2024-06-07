export const css: string = `
* {
    margin: 0;
    padding: 0;
    font-style: normal;
    font-weight: normal;
    font-family: Arial, sans-serif;
    font-size: 13px;
    color: #333;
  }
  
  #container {
    background: white;
    width: 750px;
    margin: 10px auto;
    margin-bottom: 10px;
    border: solid 1px #888;
  }
  
  #header {
    height: 50px;
    padding: 15px 0 10px 10px;
  }
  
  #header table {
    width: 100%;
  }
  
  h1 a {
    font-size: 20px;
    margin: 10px;
    letter-spacing: 1px;
    text-decoration: none;
    color: #555;
  }
  
  #info_area {
    float: left;
    margin-left: 11px;
  }
  
  #info_table {
    border-collapse: collapse;
    margin: 0 auto;
    line-height: 20px;
    width: 728px;
    table-layout: fixed;
  }
  
  #info_table tr {
    height: 30px;
  }
  
  #info_table td {
    border: solid 1px #888;
    padding: 0px 10px;
    word-wrap: break-word;
  }
  
  .info_table_label {
    width: 100px;
  }
  
  #middle {
    height: 110px;
    clear: both;
    text-align: center;
    padding-top: 20px;
  }
  
  #cli_wrap {
    margin: 0 10px;
    clear: both;
    padding-top: 20px
  }
  
  h2 {
    height: 30px;
    line-height: 30px;
    font-size: 18px;
    margin: 0 5px;
    padding-left: 5px;
  }
  
  #cli_table {
    border: solid 1px #888;
    border-collapse: collapse;
    width: 728px;
    margin: 0 auto;
    line-height: 20px;
    table-layout: fixed;
    padding-top: 20px;
  }
  
  #cli_table tr {
    height: 30px;
  }
  
  #cli_table td {
    border-bottom: solid 1px #888;
    padding-top: 3px;
    padding-bottom: 3px;
    word-wrap: break-word;
  }
  
  .cli_command {
    width: 270px;
    padding-left: 10px;
  }
  
  .cli_arrow {
    width: 40px;
    text-align: center;
  }
  
  #footer {
    background: #777;
    height: 20px;
    line-height: 20px;
    color: #ddd;
    text-align: center;
    margin-top: 15px;
    border-top: none;
  }
  
  #ip_address {
    font-size: 1.9em;
  }
  
  #ip_address_cell {
    padding: 5px;
    height: 50px;
  }`
