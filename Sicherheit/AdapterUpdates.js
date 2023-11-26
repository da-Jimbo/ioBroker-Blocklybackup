<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="on" id="N9hFsB(c0Y]keL{1+0=m" x="63" y="88">
    <field name="OID">admin.0.info.newUpdates</field>
    <field name="CONDITION">true</field>
    <field name="ACK_CONDITION"></field>
    <statement name="STATEMENT">
      <block type="telegram" id="YbvO7|4LNS|qDj-g60%J">
        <field name="INSTANCE">.0</field>
        <field name="LOG"></field>
        <field name="SILENT">FALSE</field>
        <field name="PARSEMODE">default</field>
        <field name="ESCAPING">FALSE</field>
        <field name="DISABLE_WEB_PAGE_PREVIEW">FALSE</field>
        <value name="MESSAGE">
          <shadow type="text" id="1pXKN7d?y.xaG)y=eqXy">
            <field name="TEXT">text</field>
          </shadow>
          <block type="text_join" id="Nw6F+Si#xE[L=$AfP~Ne">
            <mutation items="3"></mutation>
            <value name="ADD0">
              <block type="text" id="4?H4n#Axfv:4(enx=h|E">
                <field name="TEXT">Es gibt ioBroker Adapter Updates: </field>
              </block>
            </value>
            <value name="ADD1">
              <block type="text_newline" id="Az$H.!u=S5=L*qP5xH-%">
                <field name="Type">\n</field>
              </block>
            </value>
            <value name="ADD2">
              <block type="get_value" id="fBa9@]1Ekklo$Fl1-~JQ">
                <field name="ATTR">val</field>
                <field name="OID">admin.0.info.updatesList</field>
              </block>
            </value>
          </block>
        </value>
        <value name="USERNAME">
          <block type="text" id="mw.$65ZC1M9/y}KphN^T">
            <field name="TEXT">Chriss</field>
          </block>
        </value>
      </block>
    </statement>
  </block>
</xml>
