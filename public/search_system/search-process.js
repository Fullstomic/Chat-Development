import { SearchData } from "./search-data.js";
class SearchProcess {
  OnGetData(search_data) {
    let search_data_array = search_data.split(",");
    return this.OnSearchProcess(search_data_array);
  }
  OnSearchProcess(data) {
    let search_data_instance = new SearchData();
    let monster_list = search_data_instance.monster_list;
    let hint_image_list = search_data_instance.hint_image_list;
    let hint_sound_text_list = search_data_instance.hint_sound_text_list;

    let hint_subscript_list = {
      hint_1: data[1] / 4,
      hint_2: (data[1] / 2) % 2,
      hint_3: data[1] / 2,
    };
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
