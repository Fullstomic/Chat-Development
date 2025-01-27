import { SearchData } from "./search-data.js";
export class SearchProcess {
  OnGetData(search_data) {
    let search_data_array = search_data.split(",");
    return this.OnSearchProcess(search_data_array);
  }
  OnSearchProcess(data) {
    let search_data = new SearchData();
    let id = 0;
    let hint_subsciprt_list = {
      hint_1: id / 4,
      hint_2: (id / 2) % 2,
      hint_3: id % 2,
    };
    let result_hint_list = {
      image_hint_1:
        search_data.hint_image_list[hint_subsciprt_list.hint_1][
          search_data_array[0]
        ],
      image_hint_2:
        search_data.hint_image_list[hint_subsciprt_list.hint_2][
          search_data_array[1]
        ],
      text_hint:
        search_data.hint_sound_text_list[hint_subsciprt_list.hint_3][
          search_data_array[2]
        ],
    };
    return this.OnDisplayResultData(result_hint_list);
  }
  OnDisplayResultData(result_data) {
    let element_coversion = {
      image_hint_1_element: $(result_data.image_hint_1).html(),
      image_hint_2_element: $(result_data.image_hint_2).html(),
      sound_text_hint_element: $(result_data.text_hint).html(),
    };
    return element_coversion;
  }
}
