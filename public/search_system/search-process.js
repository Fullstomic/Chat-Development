import {
  monster_list,
  hint_image_list_1,
  hint_image_list_2,
  hint_sound_text_list,
} from "./search-data.js";
import { resource } from "./../main.js";
export class SearchProcess {
  OnGetData(monster_id, hint_id_list) {
    for (var i = 0; i < hint_id_list.length; i++) {
      parseInt(hint_id_list[i], 10);
    }
    return this.OnSearchProcess(monster_id, hint_id_list);
  }
  OnSearchProcess(monster_id, hint_id_list) {
    let id = monster_id;
    let row_1 = id / 4;
    let row_2 = (id / 2) % 2;
    let row_3 = id % 2;
    let hint_subsciprt_list = [row_1, row_2, row_3];
    hint_subsciprt_list.forEach((element) => {
      if (isNaN(element)) {
        element = 0;
      }
    });

    let row_result_list = {
      row_1: [],
      row_2: [],
      row_3: [],
    };
    if (hint_subsciprt_list[0] == 0) {
      row_result_list.row_1 = hint_image_list_1;
    } else {
      row_result_list.row_1 = hint_image_list_2;
    }
    if (hint_subsciprt_list[1] == 0) {
      row_result_list.row_2 = hint_image_list_1;
    } else {
      row_result_list.row_2 = hint_image_list_2;
    }
    row_result_list.row_3 = hint_sound_text_list[hint_subsciprt_list[2]];
    let result_hint_list = {
      image_hint_1: "<p>" + row_result_list.row_1[hint_id_list[0]] + "</p>",
      image_hint_2: "<p>" + row_result_list.row_2[hint_id_list[1]] + "</p>",
      text_hint: "<p>" + row_result_list.row_3[hint_id_list[2]] + "</p>",
    };
    return this.OnDisplayResultData(result_hint_list);
  }
  OnDisplayResultData(result_data) {
    let element_coversion = {
      image_hint_1_element: $(result_data.image_hint_1),
      image_hint_2_element: $(result_data.image_hint_2),
      sound_text_hint_element: $(result_data.text_hint),
    };
    return element_coversion;
  }
}
