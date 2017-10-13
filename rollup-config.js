import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify';

export default {
  entry: './aot/src/ng-kylin.module.js',
  dest: './aot/src/build.js', // output a single application bundle
  sourceMap: false,
  name:'ngKylin',
  format: 'iife',
  onwarn: function(warning) {
    // Skip certain warnings

    // should intercept ... but doesn't in some rollup versions
    if ( warning.code === 'THIS_IS_UNDEFINED' ) { return; }

    // console.warn everything else
    console.warn( warning.message );
  },
  plugins: [
    nodeResolve({jsnext: true, module: true}),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/rxjs/Subject.js': [ 'Subject' ]
      }
    })
  ]
};
