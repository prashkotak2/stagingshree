<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '!$^Z}njJKK:@qIGVW{S2mqXQ8}PU0|y~Ao}98Jo(Ri,7#7Mi<dOl~!3x:/FkNYl@' );
define( 'SECURE_AUTH_KEY',  'pvL@x(@ev&s.Mmex|Gj;E0EwkaM<2gZnufgd#aTY%ySs?ku#f1@PAY&!VzO&mrVX' );
define( 'LOGGED_IN_KEY',    'b#bGBhZTHU)fO0c?J+={70d;mOOCQ;YgAB<;^z)PU]MxMoMW8oA?&YT)kvAuz!32' );
define( 'NONCE_KEY',        'jhf`F4?vc]sd!aXK7uE{GNtyj nw)i,qRJCF3t>b?4sG[|Vu;h%EWv1_fUDZQ;{b' );
define( 'AUTH_SALT',        'Jfj.L0|Gx5j(]paJ[CgUrXi=>1tB%Sn8771#?k3}0JMODkAJ@ua>-vPp<}E}i_u}' );
define( 'SECURE_AUTH_SALT', '<p58n/qSrRPd#EQG0ss6,krTS1eKIcfx&=aIPn4M5N7@Vylyyo]yiSEyg76@+3lL' );
define( 'LOGGED_IN_SALT',   '< |`)J TVh*f]{h$Ba7IDSgqnH}A7K-qyA?,b0xCa6j6iQrArMy%z?PRBVWeVmB!' );
define( 'NONCE_SALT',       '8`YD1gg>=%t8[vF+h+pk=[w;IN`Zp_c*9EC4LEED^3&~ _:=!m#WP<WLs%W@>olq' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
