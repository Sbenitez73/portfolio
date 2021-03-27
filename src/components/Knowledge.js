import React from 'react'
import { Backend } from './knowledge/Backend';
import { DataBase } from './knowledge/DataBase';
import { Javascript } from './knowledge/Javascript';
import { OtherLanguages } from './knowledge/OtherLanguages';

export const Knowledge = () => {
    return (
        <section id="fh5co-intro">
            <div className="container">

                <Javascript />
                <Backend />
                <DataBase />
                <OtherLanguages />

            </div>
	    </section>
    )
}
