/* jshint node:true */

module.exports = {
  description: 'default blueprint for ember-pdf-js',

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall () {
    return this.addBowerPackageToProject('pdfjs-dist', '^1.6.343')
  }
}
