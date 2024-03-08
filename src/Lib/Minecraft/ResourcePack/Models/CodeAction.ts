import { Diagnostic } from "vscode-languageserver";
import { CodeActionBuilder } from "../../../CodeAction/Builder";
import { Commands } from "../../../../shared";

export function OnCodeAction(builder: CodeActionBuilder, diag: Diagnostic) {
  switch (diag.code) {
    case "resourcepack.model.missing":
      const id = builder.getId(diag.range);
      builder.Command(`Create rp model: '${id}'`, Commands.Create.Resourcepack.Model, [id]);
      return;
  }
}
