var ParseXMLBitmapFont = require('./ParseXMLBitmapFont');

var ParseFromAtlas = function (scene, fontName, textureKey, frameKey, xmlKey, xSpacing, ySpacing)
{
    var frame = scene.sys.textures.getFrame(textureKey, frameKey);
    var xml = scene.sys.cache.xml.get(xmlKey);

    if (frame && xml)
    {
        var data = ParseXMLBitmapFont(xml, xSpacing, ySpacing, frame);

        scene.sys.cache.bitmapFont.add(fontName, { data: data, texture: textureKey, frame: frameKey });

        return true;
    }
    else
    {
        return false;
    }
};

module.exports = ParseFromAtlas;
