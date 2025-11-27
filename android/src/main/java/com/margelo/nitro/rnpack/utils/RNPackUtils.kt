package com.margelo.nitro.rnpack.utils
  
import com.facebook.proguard.annotations.DoNotStrip

@DoNotStrip
class RNPackUtils : HybridRNPackUtilsSpec() {
  override fun multiply(a: Double, b: Double): Double {
    return a * b
  }
}
