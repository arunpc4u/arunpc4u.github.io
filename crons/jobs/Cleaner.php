<?php
/**
 * Script to remove nginx_cache
 * @ run every 24 hours
 * @ so probably at 12
 */
class Cleaner
{
    function __construct()
    {
        $this->removeCache();
    }

    function removeCache()
    {
        // execute command
        $command = 'rm -rf /data/nginx_cache/body/*';

        // simple exec it
        exec($command);
    }
}
