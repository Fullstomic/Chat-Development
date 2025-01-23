export class SearchProcess {
  OnGetData(search_data) {
    let search_data_array = search_data.split(",");
    return this.OnSearchProcess(search_data_array);
  }
  OnSearchProcess(data) {
    return this.OnDisplayResultData(data);
  }
  OnDisplayResultData(result_data) {
    if (result_data.includes("iframe")) {
      return $(result_data);
    } else {
      return $("<p>" + result_data + "</p>");
    }
  }
}
