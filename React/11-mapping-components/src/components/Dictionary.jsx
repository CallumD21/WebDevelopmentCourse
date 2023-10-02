import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(emojiTerm) {
    return (
        <Entry
            key={emojiTerm.id}
            name={emojiTerm.name}
            emoji={emojiTerm.emoji}
            meaning={emojiTerm.meaning}
        />
    );
}

function Dictionary() {
    return (
        <dl className="dictionary">
            {emojipedia.map(createEntry)}
        </dl>
    );
}

export default Dictionary;