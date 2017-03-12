import { default as ShamUI, DI } from 'sham-ui';
import bindings from './bindings';

DI.bind( 'widget-binder', bindings );

const $ = ( selector ) => document.querySelector( selector );

window.onload = () => {
    mocha.ui( 'bdd' );
    mocha.reporter( 'html' );
    mocha.setup( {
        asyncOnly: true
    } );

    const expect = chai.expect;

    describe( 'Label widget', () => {

        const UI = new ShamUI();

        it( 'Text as string', ( done ) => {
            UI.render.one( 'RenderComplete[label-string-text]', () => {
                expect( $( '#label-string-text' ).innerHTML ).to.be.equal( 'Foo' );
                done();
            } );
            UI.render.FORCE_ALL();
        } );

        it( 'Text as number', ( done ) => {
            UI.render.one( 'RenderComplete[label-number-text]', function() {
                expect( $( '#label-number-text' ).innerHTML ).to.be.equal( '42' );
                done();
            } );
            UI.render.FORCE_ALL();
        } );

        it( 'Text as getter', ( done ) => {
            UI.render.one( 'RenderComplete[label-getter-text]', function() {
                expect( $( '#label-getter-text' ).innerHTML ).to.be.equal( 'Bar' );
                done();
            } );
            UI.render.FORCE_ALL();
        } );
    } );

    if ( window.mochaPhantomJS ) {
        mochaPhantomJS.run();
    } else {
        mocha.run();
    }
};