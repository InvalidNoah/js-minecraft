import Command from "../Command.js";
import FontRenderer from "../../render/gui/FontRenderer.js";

export default class VersionCommand extends Command {

    constructor() {
        super("version", "", "Displays a list of commands")
    }

    execute(minecraft, args) {
        minecraft.addMessageToChat(FontRenderer.COLOR_PREFIX + "2--- Showing help page ---");
        minecraft.addMessageToChat(FontRenderer.COLOR_PREFIX + "2--- Nothing for you ---");
        /*minecraft.commandHandler.commands.forEach(command => {
            minecraft.addMessageToChat("/" + command.command + " " + command.usage + " - " + command.description);
        });*/
        return true;
    }

}