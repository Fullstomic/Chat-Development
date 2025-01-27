import {
  monster_list,
  hint_image_list,
  hint_sound_text_list,
} from "./search-data.js";
import { resource } from "./../main.js";
export class SearchProcess {
  OnGetData(search_data, id) {
    let search_data_array = resource.split(",");
    search_data_array[0] = "0";
    for (var i = 0; i < search_data_array.length; i++) {
      search_data_array[i] = parseInt(search_data_array[i], 10);
    }
    return this.OnSearchProcess(search_data_array, id);
  }
  OnSearchProcess(search_data_array, monster_id) {
    console.log(monster_id);
    let id = monster_id;
    console.log(0 / 4);
    let row_1 = id / 4;
    let row_2 = (id / 2) % 2;
    let row_3 = id % 2;
    let hint_subsciprt_list = [row_1, row_2, row_3];
    hint_subsciprt_list.forEach((element) => {
      if (isNaN(element)) {
        element = 0;
      }
    });

    console.log(hint_image_list[row_1]);
    let row_1_data;
    let row_2_data;
    let row_3_data;
    let row_result_list = {
      row_1: row_1_data,
      row_2: row_2_data,
      row_3: row_3_data,
    };
    row_1_data = hint_image_list[hint_subsciprt_list[0]];
    row_2_data = hint_image_list[hint_subsciprt_list[1]];
    row_3_data = hint_sound_text_list[hint_subsciprt_list[2]];
    let result_hint_list = {
      image_hint_1: row_result_list.row_1[search_data_array[1]],
      image_hint_2: row_result_list.row_2[search_data_array[2]],
      text_hint: row_result_list.row_3[search_data_array[3]],
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
