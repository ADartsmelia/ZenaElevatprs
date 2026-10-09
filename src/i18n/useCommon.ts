import { common, type Common } from "./common"
import { useLang } from "./index"

export function useCommon(): Common {
  return common[useLang()]
}
