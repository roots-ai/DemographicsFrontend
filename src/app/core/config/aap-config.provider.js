(function ()
{
    'use strict';

    angular
        .module('app.core')
        .provider('aapConfig', aapConfigProvider);

    /** @ngInject */
    function aapConfigProvider()
    {
        // Default configuration
        var aapConfiguration = {
            'disableCustomScrollbars'        : false,
            'disableMdInkRippleOnMobile'     : true,
            'disableCustomScrollbarsOnMobile': true
        };

        // Methods
        this.config = config;

        //////////

        /**
         * Extend default configuration with the given one
         *
         * @param configuration
         */
        function config(configuration)
        {
            aapConfiguration = angular.extend({}, aapConfiguration, configuration);
        }

        /**
         * Service
         */
        this.$get = function ()
        {
            var service = {
                getConfig: getConfig,
                setConfig: setConfig
            };

            return service;

            //////////

            /**
             * Returns a config value
             */
            function getConfig(configName)
            {
                if ( angular.isUndefined(aapConfiguration[configName]) )
                {
                    return false;
                }

                return aapConfiguration[configName];
            }

            /**
             * Creates or updates config object
             *
             * @param configName
             * @param configValue
             */
            function setConfig(configName, configValue)
            {
                aapConfiguration[configName] = configValue;
            }
        };
    }

})();